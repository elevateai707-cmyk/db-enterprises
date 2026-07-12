import { NextResponse } from 'next/server';
import {
  FORMS_BY_SITE,
  dbEnterprisesIntakeSchema,
  dbEnterprisesToLead,
} from '@agentic/forms';
import { leadToEmail } from '@agentic/email';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SITE_KEY = 'db-enterprises';

/**
 * Optional lead intake. Validates with the dedicated db-enterprises Zod
 * schema, converts to a normalized Lead, and builds an email envelope via
 * `leadToEmail` (pure transform — no send). Mirrors the FORMS_BY_SITE entry.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }

  const registration = FORMS_BY_SITE[SITE_KEY];
  if (!registration) {
    return NextResponse.json({ error: 'site not configured' }, { status: 500 });
  }

  const parsed = dbEnterprisesIntakeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'validation failed', issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const lead = dbEnterprisesToLead(parsed.data);
  const envelope = leadToEmail(lead); // no real send

  return NextResponse.json({
    ok: true,
    leadId: `${SITE_KEY}-${Date.now()}`,
    preview: {
      to: envelope.to,
      subject: envelope.subject,
      text: envelope.text,
    },
  });
}
