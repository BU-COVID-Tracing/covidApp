package bu.COVIDApp.restservice.InfectedKeyUpload;

import bu.COVIDApp.Database.KeySetData;
import bu.COVIDApp.Database.KeySetRegistry;
import bu.COVIDApp.restservice.InfectedKeyUpload.Uploaders.KeySetUploader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping(path="/InfectedKey")
public class InfectedKeyUploadController {
    @Autowired
    private KeySetRegistry keyReg;


    InfectedKeyUploadController(){
    }

    /**
     * Allows a user with credentials issued from /UploadCredentials to add keys to be marked as infected to the db
     * @param myKeys A list of InfectedKeys to be uploaded to whichever database is currently selected
     * @return a response to the user letting them know that the upload was successful
     */
    @PostMapping()
    public @ResponseBody boolean PostInfectedKey(@RequestBody List<InfectedKeys> myKeys) {
        KeySetUploader myUploader = new KeySetUploader(myKeys,keyReg);
        return myUploader.uploadKeys();
    }
}
