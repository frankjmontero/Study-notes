
# GitNotes

### Staging
You can tell that it’s staged because it’s under the “Changes to be committed” heading. If you commit at this point, the version of the file at the time you ran git add is what will be in the subsequent historical snapshot. 

### Commands
 - `git init` Creates a new repo in root.
 - `touch` Creates a file using git bash.
 - `git status` Shows many pieces of information: what files git know exist, if a file was staged, changes made, untraced/tracked files.
 - `git add` Add files to be followed by git and place them in stage/index.
 - `git commit -m "Your message about the commit" ` Commits files and changes in stage.
 - `git branch` Lists all branches and the one we are on.
 - `git checkout -b <my branch name>` / `git checkout` creates a new branch. `-b` takes you out of the branch you are on and moves to the just created one.
 - `git remote add origin <URL of the online repo>` What you use to link your GitHub account to Git.
 - `git push -u origin master` Sends to the repo referenced by the previous command the indicated branch. In this case master.
 - `rm <file>` Deletes a file.
    - `git add <file>` We still need to tell git about the change we are making. `git add` can be used when we are adding a new file to Git, modifying contents of an existing file and adding it to Git, or deleting a file from a Git repo.
- `git branch`. Lists available branch. With the attribute `-r` you can list all branches.
- `git remote show origin`. Shows the URL the local repository is linked to.
- `git remote pull <branchName>`. Pulls the indicated branch from the remote location linked to the local repo.
-Fetching:
     - `git remote update origin --prune`. Updates the branches of origin.

-`git diff --stat --cached [remote/branch]`, list the fle to push that have changed 
-`git diff [remote/branch]`, list the code that changed per file.
 
 
 ### Pull Requests
 After a PR is requested, reviewed and merged you are able to confirm the merge was successful because the hash code (ID) of the commit accepted in the PR will be the one to show when you view the modified file in the branch that holds it.

 ## **MISC**

 **Commits**. Un commit representa una idea terminada tan pequeña como sea posible. Una adicion al codigo fuente que agrego funcionalidad practica. En resumen has tantos commits como sea posible, siempre y cuando representen una idea compleata