# Auth endpoints

GET /auth get current user data
POST /auth/register register user
POST /auth/register login user
GET /auth/email/resend-verification-email/:email send email verification
GET /auth/email/verify/:token
GET /auth/email/forget-password/:email
POST /auth/email/reset-password

# Teams endpoints

GET /teams get all teams
GET /teams/:id get team by it's id
POST /teams/
PATCH /teams/:id
DELETE /teams/:id
PATCH /teams/:id/change-leader
PATCH /teams/:id/upload-image
PATCH /teams/:id/remove-image
POST /teams/:id/members/:memberId
DELETE /teams/:id/members/:memberId
GET /teams/email/forget-password/:email

# Profiles endpoints

GET /profiles get all profiles
GET /profiles/:id get profile by it's id
PATCH /profiles
PATCH /profiles/upload-image
PATCH /profiles/remove-image
