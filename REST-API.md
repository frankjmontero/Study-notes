2. What is an example of a JavaScript Cache API method that can help you determine if the cache needs updating?
Match

3. How can a JSON Web Token (JWT) be used for reading the user's claims?
Correct -The token is an encoded JSON object containing the claims.

4. What is an example of returning a status code from a Node.js and Express application?
app.get('/', (req, res) => {
    res.status(200).send('All Good!');
});

6. You are using a REST API to create a new item. After successfully executing the command, you need to retrieve the primary key or unique ID of the item that was created. How can you do this?
Inspect the body of the '201 CREATED' response you received, which will contain a JSON object with the information you need.

7. What does the HTTP 204 status code mean?
Correct -No Content

10. What is an example of a constraint when building a REST API?
Correct -The necessary state needed to fulfill a request is contained within the request.

11. You need to log all exceptions from an Express application to a file on disk. How can you accomplish this?
app.use(function (err, req, res, next) {
    const errorObject = {
        status: 500,
        error: err.message,
    };

    fs.writeFile('log.txt', JSON.stringify(errorObject));
});

13. What is the purpose of the HTTP PATCH method?
To apply partial changes to a specific resource

15. What HTTP status code is returned if an item was not found for a PATCH operation?
Correct -404

18. What is the difference between the HTTP PATCH and HTTP PUT methods?
PATCH supplies a set of changes that need to be applied to the resource, whereas PUT supplies a modified version of the entire resource.

REST
Representational State Transfer. 
A way to define services
