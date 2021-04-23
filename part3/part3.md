## Part 3. Debugging using the DevTools

#### DevTools - Debugging
1. num1 and num2 are being treated as strings so the result variable ends up being the concatenation of the two variables. 
2. To fix, we would need to type cast the two variables converting them from a string to an an int. See Bug_Fix_Screen_Shot in the screenshots folder to see how this bug was resolved.
#### DevTools - Network Tab
3. The name of the file is "citylots.json".
4. The "part2.js" file initiated the download of this new file.
5. It's file size is 11.7 MB.
6. It took approximately 7.73 seconds to download.
7. The User-Agent for the browser that made the request was: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36.
8. The server that it came from was Apache.
9. The file was last modified at Tue, 26 Jan 2021 22:14:13 GMT.
10. The Content-Type of the file was application/json.
11. fetchData is the method inside the initiating file that made the request.