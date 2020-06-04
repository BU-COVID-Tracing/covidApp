package bu.COVIDApp.restservice.ContactCheck.Accessors;

import bu.COVIDApp.restservice.ContactCheck.RegistryGetResponse;

import java.util.ArrayList;

/**
 * This accessor is for a database that stores a set of all infected users
 */
public class KeySetAccessor extends RegistryAccessor {
    /**
     * A constructor for an object that makes accesses to the backend registry
     *
     * @param endpoint the endpoint used to access the database
     */
    public KeySetAccessor(String endpoint) {
        super(endpoint);
    }

    @Override
    public RegistryGetResponse getKeys() {
        return null;
    }

    @Override
    public Boolean postKeys(ArrayList<Object> myKeys) {
        return null;
    }
}
