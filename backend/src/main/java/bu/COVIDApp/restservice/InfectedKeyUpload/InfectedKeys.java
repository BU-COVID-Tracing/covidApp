package bu.COVIDApp.restservice.InfectedKeyUpload;

import java.util.ArrayList;

public class InfectedKeys {
    public ArrayList<Object> myKeys;
    public String authentication;

    public InfectedKeys(ArrayList<Object> myKeys,String authentication) {
        this.myKeys = myKeys;
        this.authentication = authentication;
    }
}
