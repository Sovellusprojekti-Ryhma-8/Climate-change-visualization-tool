package com.climate_rest.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.climate_rest.project.data.V1_annual;
import com.climate_rest.project.data.V2;
import com.climate_rest.project.data.V1;
import com.climate_rest.project.data.V3_annual;
import com.climate_rest.project.services.DataService;

import java.util.List;

@CrossOrigin
@RestController
public class DataController {
 

    @Autowired
    DataService dataService;

    @GetMapping("V3annual")
    public List<V3_annual> getV3_annualData(){
        return dataService.getV3_annualData();
    }

    @GetMapping("V1annual")
    public List<V1_annual> getV1_annualData(){
        return dataService.getV1_annualData();
    }

    @GetMapping("V1monthly")
    public List<V1> getV1_monthlyData(){
        return dataService.getV1_monthlyData();
    }

    @GetMapping("V2")
    public List<V2> getV2_Data(){
        return dataService.getV2_Data();
    }
}
