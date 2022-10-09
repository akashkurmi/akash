# next-apollo-demo
Simple Next.js example with Apollo
## NextJS frontend

In the client repo, start a dev server on port `3000`
```
npm install
npm run dev
```
## Start server using - Docker

Start server with docker-compose, at the next-apollo-demo root:
```bash
docker-compose up
```
## Docker File

- Docker file contain only Server
- Client docker file is not included docker compose due to diffrent environtment support issue, hence Client need to be install manually.(Issue: Webpack is not supporting @MaterialUI)
