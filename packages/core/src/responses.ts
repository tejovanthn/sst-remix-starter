export const success = (body: any) => ({
    statusCode: 200,
    body: JSON.stringify(body)
})

export const unauthenticated = (body: any = { error: "Unauthenticated", message: "You're not authenticated" }) => ({
    statusCode: 401,
    body: JSON.stringify(body),
})

export const unauthorized = (body: any = { error: "Unauthorized", message: "You're not authorized" }) => ({
    statusCode: 403,
    body: JSON.stringify(body),
})