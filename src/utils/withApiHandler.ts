import { NextRequest } from "next/server";
import { error } from "@/utils/apiResponse";
import { BUSINESS_STATUS_CODE } from "@/config/constants";

export function withApiHandler(
  handler: (req: NextRequest) => Promise<Response>,
  defaultStatus = BUSINESS_STATUS_CODE.ERROR
) {
  return async (req: NextRequest) => {
    try {
      return await handler(req);
    } catch (err: unknown) {
      console.error("API Error:", err);

      let message = "Internal Server Error";
      if (err instanceof Error) {
        message = err.message;
      }

      return Response.json(error(message, defaultStatus), {
        status: defaultStatus,
      });
    }
  };
}
