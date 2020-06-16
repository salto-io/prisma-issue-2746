FROM node:alpine

COPY dist /project

WORKDIR /project

# Existing feature allows specifying the query engine binary
ENV PRISMA_QUERY_ENGINE_BINARY=/project/prisma/bin/query-engine-linux-musl

# NOTE: this is the missing feature :)
ENV PRISMA_DML=/project/prisma/schema.prisma

# helps debugging
ENV DEBUG=*

CMD [ "node", "main.js" ]
