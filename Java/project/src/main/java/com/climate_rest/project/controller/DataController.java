package com.climate_rest.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.climate_rest.project.data.V1_annual;
import com.climate_rest.project.data.V2;
import com.climate_rest.project.data.V1;
import com.climate_rest.project.data.V3_annual;
import com.climate_rest.project.data.V7;
import com.climate_rest.project.data.V9_info;
import com.climate_rest.project.data.V9_sector;
import com.climate_rest.project.data.V9_sub_sector;
import com.climate_rest.project.data.V3_monthly;
import com.climate_rest.project.data.V4;
import com.climate_rest.project.data.V5;
import com.climate_rest.project.data.V6;
import com.climate_rest.project.services.DataService;

import java.util.List;
import java.util.Map;

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

    @GetMapping("V7")
    public List<V7> getV7_data(){
        return dataService.getV7_data();
    }

    @GetMapping("V3monthly")
    public List<V3_monthly> getV3_monthlyData(){
        return dataService.getV3_monthlyData();
    }

    @GetMapping("V2")
    public List<V2> getV2_Data(){
        return dataService.getV2_Data();
    }

    @GetMapping("V4")
    public Map<String, List<V4>> getV4_Data(){
        return dataService.getV4_Data();
    }

    @GetMapping("V5")
    public List<V5> getV5_Data(){
        return dataService.getV5_Data();
    }
    @CrossOrigin
    @GetMapping("V9_info")
    public List<V9_info> getV9_data(){
        return dataService.getV9_data();
    }
    @CrossOrigin
    @GetMapping("V9_sector")
    public List<V9_sector> getV9_sector(){
        return dataService.getV9_sector();
    }
    @CrossOrigin
    @GetMapping("V9_sub_sector")
    public List<V9_sub_sector> getV9_sub_sector(){
        return dataService.getV9_sub_sector();
    }

    @GetMapping("V6")
    public List<V6> getV6_Data(){
        return dataService.getV6_Data();
    }
}
