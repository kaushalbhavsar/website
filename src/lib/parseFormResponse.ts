export type FormResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function parseFormResponse(res: Response): Promise<FormResponse> {
  const text = await res.text();

  if (!text.trim()) {
    if (res.status === 429) {
      return { success: false, error: "Too many submissions. Please try again later." };
    }
    if (res.status >= 500) {
      return { success: false, error: "Server error. Please try again or email us directly." };
    }
    return { success: false, error: "Unexpected empty response from server." };
  }

  try {
    return JSON.parse(text) as FormResponse;
  } catch {
    return { success: false, error: "Invalid server response. Please try again or email us directly." };
  }
}
