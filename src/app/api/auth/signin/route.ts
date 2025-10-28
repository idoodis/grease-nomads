import { NextResponse } from 'next/server';

interface SignInPayload {
  email: string;
  password: string;
}

const getAllowedCredentials = () => {
  const configuredEmail = process.env.ADMIN_EMAIL;
  const configuredPassword = process.env.ADMIN_PASSWORD;

  const credentials = [] as Array<{ email: string; password: string }>;

  if (configuredEmail && configuredPassword) {
    credentials.push({ email: configuredEmail, password: configuredPassword });
  }

  credentials.push({ email: 'admin@greasenomads.com', password: 'admin123' });

  return credentials;
};

export async function POST(request: Request) {
  const credentials = getAllowedCredentials();

  if (!credentials.length) {
    return NextResponse.json(
      { error: 'Admin credentials are not configured.' },
      { status: 500 }
    );
  }

  let payload: SignInPayload;
  try {
    payload = (await request.json()) as SignInPayload;
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const isAuthorized = credentials.some(
    (cred) => cred.email === payload.email && cred.password === payload.password
  );

  if (!isAuthorized) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  return NextResponse.json({ success: true });
}
