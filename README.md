# Load Third-Party Scripts Dynamically

When using Gatsby, we whant our initial loading is as fast as possible.
So if we need an external library, we probably won't want to put it directly in build time. Unless it is essential for the application.

This approach is also useful when we want to bypass Gatsby's traditional source plugin approach.