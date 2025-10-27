# Bookstore

All the related documentation can be found under ./docs folder.

## Run the app

### Mac Docker Compose v2 client
```sh
docker compose build --no-cache && docker compose up
```

force rebuild
```sh
docker compose build --no-cache && docker compose up --force-recreate
```

### v1 legacy
```sh
# Build without cache
docker-compose build --no-cache

# Start containers, recreate if needed
docker-compose up --force-recreate
```

force rebuild
```sh
docker compose build --no-cache && docker compose up --force-recreate 
```

### Troubleshoot
Sometimes the app is stuck steps to fix
Step 1: While the container is running, Execute command
```sh
docker compose exec bookstore-api npx nx reset
```

Step 2: Stop the container
```sh
docker compose down
```

Step 3: Restart
```sh
docker compose up
```

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
