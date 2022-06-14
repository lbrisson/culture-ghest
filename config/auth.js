const env = process.env.NODE_ENV

export const config = {
    env,
    secrets: {
        jwt: `${process.env.JWT_SECRET_KEY}`,
        jwtExp: '100d'
    }    
}