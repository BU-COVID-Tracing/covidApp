package bu.COVIDApp.restservice.ContactCheck.Accessors;

import bu.COVIDApp.Database.KeySetRegistry;
import bu.COVIDApp.restservice.ContactCheck.RegistryGetResponse;

import java.util.ArrayList;

public abstract class RegistryAccessor {
    /**
     * A constructor for an object that makes accesses to the backend registry
     * @param myReg initialize a registry
     */

    //TODO: Make the registry object extendable
    public RegistryAccessor(Object myReg){
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
    public abstract Boolean checkKeys(ArrayList<Object> myKeys);
}
