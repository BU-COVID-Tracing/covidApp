package bu.COVIDApp.restservice.ContactCheck;

import bu.COVIDApp.Database.KeySetData;

import java.util.ArrayList;


public class RegistryGetResponse {
    private ArrayList<KeySetData> myDataContainer;

    public RegistryGetResponse(ArrayList<KeySetData> myDataContainer){
        this.myDataContainer = myDataContainer;
    }

    public ArrayList<KeySetData> getMyDataContainer() {
        return myDataContainer;
    }

    public void setMyDataContainer(ArrayList<KeySetData> myDataContainer) {
        this.myDataContainer = myDataContainer;
    }
}
