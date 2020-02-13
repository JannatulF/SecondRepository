package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features",//path of the feature file
		glue="stepDefination",//path of the step definition file
        plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json",
        		 "junit:target/cucumber-reports/Cucumber.xml",
        "html:target/cucumber-reports"},//to generate different type of format
        monochrome=true,//display the console output is proper readable format
        strict=true,//it will check any step is not defined any step definition file
        dryRun=false//to check mapping is proper between feature file and step definition file
        )
        
public class TestRunner {

}
