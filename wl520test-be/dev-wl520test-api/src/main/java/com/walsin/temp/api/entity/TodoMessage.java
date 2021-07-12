package com.walsin.temp.api.entity;

import lombok.Data;

/**
 * Author: Cody Chiu
 * Date: 2021/06/09
 */
@Data
public class TodoMessage {
    private String tenantId;
    private String yyUserId;
    private String businessKey;
    private String appId;
    private int operationType;
}
