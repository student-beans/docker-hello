# Hello
## Running a simple test
    docker run --rm -it -p 4000:80 student-beans/hello

## Configuration

|Environment Variable|Default|Description|
|:-----:|:-----:|:----------|
|PORT|4000|Set the Listen Port to access the hello-world container.|
|MSG|World|Set the string that will be concatenated to Hello in the response.|
