package org.launchcode.techjobs_oo;

import org.junit.*;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class JobTest {

    @Test
    public void testSettingJobId(){
        Job job1 = new Job();
        Job job2 = new Job();
        assertEquals((job1.getId() != job2.getId()), true);
    }
    @Test
    public void testEquals() {
    }
}