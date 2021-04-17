# **Tools**

Selenium, Web Driver.

# **Concepts**

## **What is testing?**
  
Process that include many different activities mainly execution of tests and results checking, also test planning, analysis, design test, bug reporting, test reporting.

### **Testing Objectives**

- Prevent defects by evaluating work products suck as requirements. (Prevent).
- Find defects and failures to increase the software quality. (Reacting).
- Verify all specified requirements are fulfilled
- Comply with contractual, legal, or regulatory requirements or standards.

## **Testing and debugging**

Testing is not debugging

| Testing | Debugging |
|---|---|
| Fund bugs | Finds and fixes root cause of bugs |
<br>

## Testing Contribution to Software

Testing and its contribution to software success, happens when we apply appropriate test techniques with the appropriate level of test expertise, and at the appropriate point in the SDLC.

Tester can and should be involved with:

- Review of requirements.
- The design. Helps with early defects detection and preparation for testing.
- Work closely with devs
- Verify and validate software before release.

## **QA vs Testing**

QM (Quality Management): everything testers do.
QA (Quality Assurance): Adherence to proper processes. Proactive, prevents.
QC (Quality Control): Reactive. Includes testing and its various activities. Focuses on product.

![](./Resources/QAvsTesting.jpeg)

Consider QC part of QA

![](./Resources/QA_TestingDiagram.jpeg)

## **Errors, Defects and Failures**

- **Error**: Mistake. Something humans do.
- **Defect** (bugs), is a human mistake that gets built into the software
- **Failure**, bug that manifests while using the software.

It's better to deal with the root cause than its effects. But do not turn root cause analysis into a blame game

## **Testing Principles**

1. **Testing shows the presence of defects, not their absence**

2. **Exhaustive testing is impossible.**
  - *Combinatorial explosion*. Not having enough time to try all possible combinations.

3. **Early testing saves time and money.** It's better to find a defect on paper before it has bee converted to code by developers.

4. **Defects cluster together.** Analyses have found that bugs are typically grouped together in some of the modules that comprise the system. This help with prioritizing. Ex.: If a system has a feature that is going to be implemented in one of the modules and you have little time to test an approach if to:
  - Start with the updated module.
  - Follow with, in your experience with the system, that module that has bugs more frequently.
  - Continue with the rest of the modules if you have time left.

5. **Beware of the pesticide paradox.** With time, the same tests stop catching bugs. Avoid this by updating and creating new tests.
Also in you test instructions avoid the use of magic numbers: <br>
  Ex.: If you want to test an input with a large value like 10 billion, don't say 10 billion, say "any large number over ten billion"

6. **Testing is context dependent**. Learning test techniques and the system we are working on is important, but also keeping in mind the broader picture (context) will help you make better choices when testing. Your priorities, testing approach and entire workflow will be affected by your surroundings. 

7. **Absence-of-errors is a fallacy.** Although this principle is similar to the first one, the first principle means that you will never prove that there are no bugs. This principle means even if you catch and fox many important defects, your not guaranteed success.

## **QA automation**

Using a separate software to automatically perform tests for you to a piece of software.

<br>

## **Class of testing**

### **GUI testing**

Mimics the users interaction with the software. API testing. Tests the programming interface

### **Unit testing**

The easiest since you are testing the smallest pieces of software of the application.

<br>

## **Types of testing**

### **Integration test**

Multiple components are tested at once, through the code rather than the user interface. Questions that could answer: Does the software connects to the proper web service?

### **Functional test**

Tests the output disregarding the  internal functionality of the components.

### **Smoke test**

Test the stability and functionality of the build and its main features, 

### **End-to-end test**

Comprehensive test which is key to make sure the whole system works as intended.

### **Performance test**

Stability and speed with big data loads.

### **Regression test**

Confirms that new added features are no bringing old bugs back.