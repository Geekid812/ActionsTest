/// GitHub script to validate pull requests

module.exports = async ({ github, context }) => {
    await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: 'Hello World!'
    });
}
