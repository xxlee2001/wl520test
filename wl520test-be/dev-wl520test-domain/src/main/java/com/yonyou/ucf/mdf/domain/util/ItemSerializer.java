package com.yonyou.ucf.mdf.domain.util;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.imeta.orm.base.BizObject;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map.Entry;

public class ItemSerializer extends JsonSerializer<BizObject> {
    @Override
    public void serialize(BizObject value, JsonGenerator jgen, SerializerProvider provider) throws IOException {
        jgen.writeStartObject();
        Iterator<Entry<String, Object>> it = value.entrySet().iterator();
        ;
        while (it.hasNext()) {
            Entry<String, Object> o = it.next();
            String fieldName = o.getKey();
            Object pojo = o.getValue();
            if (!"_parent".equals(fieldName)) {
                jgen.writeObjectField(fieldName, pojo);
            }
        }
        jgen.writeEndObject();
    }
}  
