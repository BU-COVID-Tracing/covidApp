package bu.COVIDApp.restservice.ContactCheck.Accessors;

import bu.COVIDApp.Database.KeySetRegistry;
import bu.COVIDApp.restservice.ContactCheck.RegistryGetResponse;

import java.util.ArrayList;

public class KeyValBloomFilterAccessor extends RegistryAccessor {

    /**
     * A constructor for an object that makes accesses to the backend registry
     * @param endpoint the endpoint used to access the database
     */
    public KeyValBloomFilterAccessor(Object myReg) {
        super(myReg);
    }

    /**
     * Get a bloom filter from the registry so that users can locally check the keys they have collected against it
     * @return A registry get response containing a bloom filter
     */
    @Override
    public RegistryGetResponse getKeys() {
        return null;
    }

    /**
     * A user provides a list of keys that they have encountered and a check is done against the bloom filter here
     * with a positive or negative result returned back to the user
     * @param myKeys A list of keys to check against your local version of the registry
     * @return true if a matching key was found, false otherwise
     */
    @Override
    public Boolean checkKeys(ArrayList<Object> myKeys) {
        return null;
    }
}
