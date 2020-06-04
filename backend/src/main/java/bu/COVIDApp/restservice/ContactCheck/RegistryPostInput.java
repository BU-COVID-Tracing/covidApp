package bu.COVIDApp.restservice.ContactCheck;

import java.util.ArrayList;

/**
 * The object that holds the array of keys and authorization parameters of the user wishing to check contact
 */
public class RegistryPostInput {
    private ArrayList<Object> keyArray;
    private String authorization;

    public RegistryPostInput(ArrayList<Object> keyArray,String authorization){
        this.keyArray = keyArray;
        this.authorization = authorization;
    }

    public ArrayList<Object> getKeys(){
        return keyArray;
    }

    public String getAuthorization(){
        return authorization;
    }
}
