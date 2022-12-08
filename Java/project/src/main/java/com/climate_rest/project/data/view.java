package com.climate_rest.project.data;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.Id;W
// import javax.persistence.Table;
import java.util.List;
import java.util.HashMap;


// @Entity
// @Table(name="views")
public class view {

    // @Id
    // @Column(name="Id")
    private String Id;
    // @Column(name="visualizations")
    private List<String> visualizations;
    // @Column(name="descriptions")
    private List<String> descriptions;
    // @Column(name="style")
    private int style;

    public view() {

    }

    public view(String Id, List<String> visualizations,
    List<String> descriptions, int style) {
        this.Id = Id;
        this.visualizations = visualizations;
        this.descriptions = descriptions;
        this.style = style;
    }


    public String getId() {
        return this.Id;
    }

    public void setId(String Id) {
        this.Id = Id;
    }

    public List<String> getVisualizations() {
        return this.visualizations;
    }

    public void setVisualizations(List<String> visualizations) {
        this.visualizations = visualizations;
    }

    public List<String> getDescriptions() {
        return this.descriptions;
    }

    public void setDescriptions(List<String> descriptions) {
        this.descriptions = descriptions;
    }

    public int getStyle() {
        return this.style;
    }

    public void setStyle(int style) {
        this.style = style;
    }

}