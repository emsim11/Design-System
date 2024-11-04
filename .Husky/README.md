# Husky

## Pre-Commit

[File](./Pre-Commit)

- Invoked by `git commit` before Git asks the developer for a commit message or generates a commit object.
- This hook takes zero arguments, and exiting with a non-zero status will abort the commit operation.
- It is used for:
  - Linting
  - Code Formatting / Style Checks
  - Spellchecking
  - Test Running
  - Static Analysis

## Prepare Commit Message

[File](./Prepare-Commit-Msg)

- Invoked by `git commit` after preparing the commit message and just before launching the commit message editor.
- This hook takes in the following arguments:
  - The name of the file that contains the commit log message.
  - The type of commit: message, template, merge, squash, or commit.
  - Commit SHA1.
- It is used for editing the default message before the commit author see its (e.g., adding the branch name to the commit message).

## Commit Message

[File](./Commit-Msg)

- Invoked by `git commit` after the user enters a commit message.
- This hook takes one parameter and is the path to a temporary file that contains the commit message.
- It is used for validating the commit state or message to ensure compliance with a standard or to reject based on any criteria.

## Post Commit

[File]

- Invoked by `git commit` after the commit operation is completed.
- This hook takes no parameters.
- It is used for providing notifications.

## Pre Push

[File](./Pre-Push)

- Invoked by `git push`.
- This hook takes in two parameters:
  - The remote name.
  - The location (URL).
- It is used for preventing a push from taking place.
