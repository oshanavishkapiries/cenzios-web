import { NextResponse } from "next/server";
import { sendJobApplicationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const result = await sendJobApplicationEmail(formData);

    if (result.success) {
      return NextResponse.json(
        { message: "Application submitted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to submit application" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in careers API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
