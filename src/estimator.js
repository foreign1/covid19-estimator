const covid19ImpactEstimator = (data) => {
    data;

    //Normalize period type
    let normalized_day = (period, timeToElapse) => {
        timeToElapse = data.timeToElapse;
        switch(period){
            case "days":
                return timeToElapse;
            case "weeks":
                return timeToElapse * 7;
            default:
                return timeToElapse * 30;      
        }
    }

    //Calculate currently infected which doubles in size every 3 days
    infectionAfterDoubling = (timeToElapse, currentlyInfected) => {
        power = Math.floor(timeToElapse/3)
        return currentlyInfected*(Math.pow(2,power))
    }


    
    return {
        data: {}, // the input data you got

        impact: {
            //Number of currently infected people
            currentlyInfected: data.reportedCases * 10,
            //Number of infected people in 30 days
            infectionsByRequestedTime: infectionAfterDoubling(normalized_day(data.periodType, data.timeToElapse), this.currentlyInfected)
        }, // your best case estimation
        severeImpact: {
            //Number of currently infected people
            currentlyInfected: data.reportedCases * 50,
            //Number of infected people in 30 days
            infectionsByRequestedTime: infectionAfterDoubling(normalized_day(data.periodType, data.timeToElapse), this.currentlyInfected)    
        } // your severe case estimation
    }
    
}



    
module.export
//export default covid19ImpactEstimator;
