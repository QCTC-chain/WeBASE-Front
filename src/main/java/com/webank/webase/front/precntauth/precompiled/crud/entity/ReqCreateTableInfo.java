package com.webank.webase.front.precntauth.precompiled.crud.entity;

import com.webank.webase.front.base.code.ConstantCode;
import java.util.List;
import javax.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReqCreateTableInfo {

  @NotNull(message = ConstantCode.PARAM_FAIL_GROUPID_IS_EMPTY)
  private String groupId;
  private String tableName;
  private String keyFieldName;
  private List<String> valueFields;
  private String signUserId;
  @NotNull
  private String fromAddress;

}
