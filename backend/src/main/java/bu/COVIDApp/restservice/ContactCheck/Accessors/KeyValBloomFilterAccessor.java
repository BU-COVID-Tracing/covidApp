package bu.COVIDApp.restservice.ContactCheck.Accessors;

import bu.COVIDApp.restservice.ContactCheck.RegistryGetResponse;

import java.util.ArrayList;

public class KeyValBloomFilterAccessor extends RegistryAccessor {

    /**
     * A constructor for an object that makes accesses to the backend registry
     * @param endpoint the endpoint used to access the database
     */
    public KeyValBloomFilterAccessor(String endpoint) {
        super(endpoint);
    }

    /**
     *
     * @return
     */
    @Override
    public RegistryGetResponse getKeys() {
        return null;
    }

    @Override
    public Boolean postKeys(ArrayList<Object> myKeys) {

        return null;
    }
}
