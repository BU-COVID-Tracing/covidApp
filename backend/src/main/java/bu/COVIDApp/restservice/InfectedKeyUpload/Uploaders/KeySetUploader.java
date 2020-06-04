package bu.COVIDApp.restservice.InfectedKeyUpload.Uploaders;

import bu.COVIDApp.restservice.InfectedKeyUpload.InfectedKeys;
import bu.COVIDApp.restservice.InfectedKeyUpload.Uploaders.InfectedKeyUploader;

public class KeySetUploader extends InfectedKeyUploader {
    /**
     * @param myKeys an InfectedKeys object that contains the keys and authorization info for the key upload
     */
    public KeySetUploader(InfectedKeys myKeys) {
        super(myKeys);
    }

    /**
     * Upload the keys in myKeys to the registry.
     */
    @Override
    public void uploadKeys() {
        if(authorize()){
            //Do key upload
        }else{
            //Return something to the user to let them know that the authorization failed
        }
    }
}
