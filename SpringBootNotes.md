
# Maven

Is a build tool 

## **Setting it up**

### **Ubuntu**

- Make sure you have Java JDK installed: java -version
  - If not: `sudo apt install default-jdk`
- `sudo apt install maven`
- Setup environment variable: `sudo nano /etc/profile.d/maven.sh`
  - Add this script to the configuration file:
`export JAVA_HOME=/usr/lib/jvm/default-java
export M2_HOME=/opt/maven
export MAVEN_HOME=/opt/maven
export PATH=${M2_HOME}/bin:${PATH}`
- Additionally make sure the Java (JDK) version you have is currently found in PATh
  - If not, one alternative is to save the path to the Java directory to *.profile* file to make sure that setup is available in the whole system.
    - `nano ~/.profile`
    - add:
      - `export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64`
      - `export PATH=$JAVA_HOME/bin:$PATH`

### **Windows**

- Download the .zip https://maven.apache.org/download.cgi.
- Just extract the content on any directory and add the bin 
folder to the Path environment variable.

## **Commands**

### **Test**

You can no now execute maven commands from terminal.

```
mvn test
```

### **Run REST API**
```
mvn spring-boot:run
```
This command bundles our Spring Boot project into a `target/` directory located in the root directory fo the project and then expose/run/service our API/server.


# **Concepts**

### **Build Tool**
