package bu.COVIDApp.restservice.ContactCheck.Accessors;

import bu.COVIDApp.restservice.ContactCheck.RegistryGetResponse;

import java.util.ArrayList;

public abstract class RegistryAccessor {
    String dbEndpoint;
    /**
     * A constructor for an object that makes accesses to the backend registry
     * @param endpoint the endpoint used to access the database
     */
    public RegistryAccessor(String endpoint){
        this.dbEndpoint = endpoint;
    }

    /**
     * Retrieves an object(depends on the accessor) from the DB (or uses a cached local copy) for the user so that they
     * can check for potential contact on their local device
     */
    public abstract RegistryGetResponse getKeys();

    /**
     * Does a check on the server(here) and returns boolean letting the user know if contact has been found or not
     * @param myKeys A list of keys to check against your local version of the registry
     * @return true if a matching key was found, false otherwise
     */
    public abstract Boolean postKeys(ArrayList<Object> myKeys);
}
