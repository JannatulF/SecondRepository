package stepDefination;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefination {
	
    @Given("^User is in banking landing page$")
    public void user_is_in_banking_landing_page() throws Throwable {
        System.out.println("navigating to banking landing page");
    }

    @When("^User login into application username with \"([^\"]*)\" and password with \"([^\"]*)\"$")
    public void user_login_into_application_username_with_something_and_password_with_something(String strArg1, String strArg2) throws Throwable {
        System.out.println(strArg1);
        System.out.println(strArg2);
    }

    @Then("^Home page is populated$")
    public void home_page_is_populated() throws Throwable {
       System.out.println("home page is populated");
    }

    @And("^Cards are displayed \"([^\"]*)\"$")
    public void cards_are_displayed_something(String strArg1) throws Throwable {
       System.out.println(strArg1);
    }
}
