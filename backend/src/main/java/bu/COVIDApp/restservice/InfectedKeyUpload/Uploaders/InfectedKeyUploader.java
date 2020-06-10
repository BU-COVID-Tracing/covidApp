package bu.COVIDApp.restservice.InfectedKeyUpload.Uploaders;

import bu.COVIDApp.restservice.InfectedKeyUpload.InfectedKeys;

import java.util.List;

public abstract class InfectedKeyUploader {
    List<InfectedKeys> myKeys;

    /**
     * @param myKeys an InfectedKeys object that contains the keys and authorization info for the key upload
     */
    public InfectedKeyUploader(List<InfectedKeys> myKeys){
        this.myKeys = myKeys;
    }

    /**
     * check if the authorization key in myKeys is valid
     * @return true if authorization was successful, false otherwise
     */
    protected boolean authorize(){
        return true;
    }

    /**
     * Uploads the keys to the registry in the form required for that specific dbSchema
     * @return true if the upload completed successfully. False otherwise
     */
    public abstract boolean uploadKeys();
}
