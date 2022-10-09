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

## App Screenshots
<img width="1400" alt="Screenshot 2022-10-09 at 22 49 21" src="https://user-images.githubusercontent.com/35553832/194781355-cd2e08bb-4a19-4192-a434-163707f2fbdb.png">
<img width="1400" alt="Screenshot 2022-10-09 at 22 50 23" src="https://user-images.githubusercontent.com/35553832/194781366-c6f05f16-3a1c-445d-b6bb-9a9cb3f0c928.png">

