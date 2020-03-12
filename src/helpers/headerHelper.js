class headerHelper{
    static getNextLink(linkHeader){
        return headerHelper.getLinkPart(linkHeader, 'rel="next"')
    }

    static getPrevLink(linkHeader){
        return headerHelper.getLinkPart(linkHeader, 'rel="prev"')
    }


    static getLinkPart(linkHeader, linkName){ //Where is my typescript so I can make this private?? Curse you timed code challenge!! 
        //There is probably a library for this...     
        
        try{
            let parts = linkHeader.split(",")
            let correctPart;
            parts.forEach((part)=>{
                if(part.indexOf(linkName) > 0)
                    correctPart = part;
            })

            if(correctPart)
                return correctPart.substring(2, correctPart.indexOf(">"));
        }
        catch {
            //I really do not like this. I could have tested values before working on them rather than assume they might fail... But I need to move forward. 
            //Do it right, or do it fast. I am going fast at the moment... Something I am actually strongly opposed to... I prefer right. 
        }

    }
}

export default headerHelper;