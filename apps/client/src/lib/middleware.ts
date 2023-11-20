// Middleware.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import ensureDbIsConnected from '@/lib/dbConnection';
import { Admin } from 'db';
import jwt from 'jsonwebtoken';

const secret = "secret"

type Data = {
    username?: string,
    role?: string
}

export default async function IsExistingUser(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
    next: () => void
) {
    await ensureDbIsConnected();
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const authToken = authHeader.split(" ")[1];

        jwt.verify(authToken, secret, async (err, admin) => {
            if (err || !admin || typeof (admin) === "string") {
                return res.status(403).end();
            }

            const existingAdmin = await Admin.findOne(admin.username);

            if (existingAdmin) {
                const username = existingAdmin.username;
                const userRole = admin.role;

                // Storing data in request object for route to access
                (req as any).user = { username, userRole };

                next(); // Call next middleware/route handler
            } else {
                res.status(403).end();
            }
        });
    } else {
        res.status(401).end(); // Unauthorized
    }
}
