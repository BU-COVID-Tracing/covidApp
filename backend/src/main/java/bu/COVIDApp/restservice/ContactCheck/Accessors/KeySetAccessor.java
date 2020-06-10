package bu.COVIDApp.restservice.ContactCheck.Accessors;

import bu.COVIDApp.Database.KeySetData;
import bu.COVIDApp.Database.KeySetRegistry;
import bu.COVIDApp.restservice.ContactCheck.RegistryGetResponse;
import bu.COVIDApp.restservice.InfectedKeyUpload.InfectedKeys;

import java.security.Key;
import java.util.ArrayList;
import java.util.List;

/**
 * This accessor is for a database that stores a set of all infected users
 */
public class KeySetAccessor extends RegistryAccessor {
    private KeySetRegistry keyReg;
    /**
     * A constructor for an object that makes accesses to the backend registry
     *
     * @param keyReg the registry object corresponding to the mysql database hosting the registry
     */
    //TODO: Clean this up. Make Object into a registry type
    public KeySetAccessor(Object keyReg) {
        super(keyReg);
        this.keyReg = (KeySetRegistry)keyReg;
    }

    @Override
    public RegistryGetResponse getKeys() {
        return new RegistryGetResponse((ArrayList<KeySetData>) keyReg.findAll());
    }

    @Override
    public Boolean checkKeys(ArrayList<Object> myKeys) {
        return null;
    }
}
