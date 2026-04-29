---
source:
created: 2025-02-26
description: Base knowledge of docker
tags:
  - "#publish"
  - devops
---
Docker: tool to run containers and build images

Containers: isolated entities that contain the application and it's dependencies along the configurations that can easily run on a host

Images: blueprints that define what the container should contain and how the containers should function

Docker daemon: background process that is listening for the API call, and is responsible for interpreting it, and instructing its component to take action in the described way (follow the recipe)

ContainerD: container runtime interface, takes the instruction for container creation & managament. Also manages the image management
	Runc: feature of linux kernel that allows to isolate a running process
	C-group: feature of linux kernel that allows to allocate precise hardware resources to a running process

