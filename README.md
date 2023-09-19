# workspacebug README

WorkspaceFolders and WorkspaceFile as provided by the VSCode API are defined in documentation as (as of 2023-09-19):
![](https://user-images.githubusercontent.com/6158871/269071253-7c8fe91e-f883-4343-8e7e-26f017ebb09c.png)
![](https://user-images.githubusercontent.com/6158871/269071257-c2729ea4-2cf1-4ac2-8d95-431fda9e34a9.png)

These objects both define themselves only as undefined when a workspace isn't present.
Despite the behavior described in docs, they can be undefined at different times.
This presents an issue with detecting whether a workspace is open or not - which is the source of truth if they aren't defined in the case specified?

## Run instructions
Run `yarn install`, `yarn compile`, run the extension host, and open a folder to reproduce the issue where no workspacefile is present despite the workspaceFolders being populated by the open folder

## Extension Settings

activation event for this extension "onStartupFinished"
