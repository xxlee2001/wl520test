/**
 * 所属领域：全局
 * 创建人：哈托
 * 创建时间：2020-10-15
 * 最后修改人：-----
 */

cb.define('developplatform', function () {
	var common_function_VM_Extend = (function () {
		/**
		 * 判空
		 * @param {*} data 需要判空的数据
		 */
		var isNull = function (data) {
			let flag = false;
			// 判断是否是未定义的
			if (data === undefined || data == null) {
				return true;
			}
			switch (typeof (data)) {
				case 'string':
					// 判断 "",null,undefined,NaN
					if (!data) {
						flag = true;
					}
					break;
				case 'Object':
					// Object {}// 普通对象使用 for...in 判断，有 key 即为 false
					if ($.isEmptyObject(data)) {
						flag = true;
					}
					break;
				case 'Array':
					if (!data.length) { // "",[]
						flag = true;
					}
					break;
			}
			return flag;
		}

		/**
		 * 日期增加年数
		 * @param {*} date 要计算的日期
		 * @param {*} num 增加的年数
		 */
		var dateAddYear = function (date, num) {
			var newDate = new Date(date)
			newDate.setFullYear(newDate.getFullYear() + num);
			return newDate.format("yyyy-MM-dd");
		}

		/**
		 * 日期增加月数
		 * @param {*} date 要计算的日期
		 * @param {*} num 增加的月数
		 */
		var dateAddMonth = function (date, num) {
			var newDate = new Date(date)
			newDate.setMonth(newDate.getMonth() + num);
			return newDate.format("yyyy-MM-dd");
		}

		/**
		 * 日期增加天数
		 * @param {*} date 要计算的日期
		 * @param {*} num 增加的天数
		 */
		var dateAddDay = function (date, num) {
			var newDate = new Date(date)
			newDate.setDate(newDate.getDate() + num);
			return newDate.format("yyyy-MM-dd");
		}

		/**
		 * 年月日时间差计算
		 * @param {*} date1 开始日期
		 * @param {*} date2 结束日期
		 */
		var diffDateAll = function (date1, date2) {
			if (isNull(date1) || isNull(date2)) {
				return '';
			}
			let begin = new Date(date1);
			let end = new Date(date2);
			let swap = false;
			if (begin > end) {
				let tmp = begin;
				begin = end;
				end = tmp;
				swap = true;
			}
			let d1 = begin.getDate();
			let m1 = begin.getMonth() + 1;
			let y1 = begin.getFullYear();
			let d2 = end.getDate();
			let m2 = end.getMonth() + 1;
			let y2 = end.getFullYear();
			var getMonthDays = function (y, m) {
				var aMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
				if (m == 2 && ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0))) {
					return 29;
				}
				return aMonthDays[m];
			};
			let y, m, d
			let tempD = 0
			let tmpM = 0
			let tmpY = 0
			if (d2 >= d1) {
				d = d2 - d1
			} else {
				tmpM = -1
				d = getMonthDays(y1, m1) + d2 - d1
			}
			if (m2 + tmpM >= m1) {
				m = m2 + tmpM - m1
			} else {
				tmpY = -1
				m = 12 + m2 + tmpM - m1
			}
			y = y2 + tmpY - y1
			return (y > 0 ? y + '年 ' : '') + (m > 0 ? m + '个月 ' : '') + (d > 0 ? d + '天 ' : '');
		}

		/**
		 * 年时间差计算
		 * @param {*} date1 开始日期
		 * @param {*} date2 结束日期
		 */
		var diffDateYear = function (date1, date2) {
			if (isNull(date1) || isNull(date2)) {
				return '';
			}
			let begin = new Date(date1);
			let end = new Date(date2);
			let swap = false;
			if (begin > end) {
				let tmp = begin;
				begin = end;
				end = tmp;
				swap = true;
			}
			let d = Math.abs(end.getTime() - begin.getTime()) / 1000 / 24 / 60 / 60;
			let year = Math.round(d / 365);
			return year;
		}

		var toDoTask = function (viewModel) {
			let categoryId = viewModel.getParams().domainKey + '.' + viewModel.getParams().billNo;
			categoryId = categoryId.replace(/yylist/ , '');
			let tableName = viewModel.getGridModel().getColumn('id').cDateSorceName;
			var params = {
				categoryId: categoryId,
				tableName: tableName
			};
			var url = '/basetask/toDoTask?terminalType=3';
			var proxy = cb.rest.DynamicProxy.create({
				settle: {
					url: url,
					method: "POST"
				}
			});
			proxy.settle(params, function (err, result) {
				if (err) {
					cb.utils.alert(err.message, 'error');
					return;
				}
				viewModel.getGridModel().setState('dataSourceMode', 'local');
				viewModel.getGridModel().setDataSource(result);
				viewModel.getGridModel().setState('dataSourceMode', 'remote');
			});
		}

		var completedTask = function (viewModel) {
			let categoryId = viewModel.getParams().domainKey + '.' + viewModel.getParams().billNo;
			categoryId = categoryId.replace(/yylist/ , '');
			let tableName = viewModel.getGridModel().getColumn('id').cDateSorceName;
			var params = {
				categoryId: categoryId,
				tableName: tableName
			};
			var url = '/basetask/completedTask?terminalType=3';
			var proxy = cb.rest.DynamicProxy.create({
				settle: {
					url: url,
					method: "POST"
				}
			});
			proxy.settle(params, function (err, result) {
				if (err) {
					cb.utils.alert(err.message, 'error');
					return;
				}
				viewModel.getGridModel().setState('dataSourceMode', 'local');
				viewModel.getGridModel().setDataSource(result);
				viewModel.getGridModel().setState('dataSourceMode', 'remote');
			});
		}

		/**
		 * 获取参照数据
		 * @param {*} viewModel 
		 * @param {*} refCode 参照编码
		 * @param {*} value 参照项编码或名称
		 */
		var getRefData = function (viewModel, refCode, value, callback) {
			let billnum = viewModel.getParams().billNo;
			billnum = billnum.replace(/yylist/, '');
			let tenantId = viewModel.getParams().billData.tenant_id
			var params = {
				refCode: refCode,
				billnum: billnum,
				tenantId: tenantId,
				value: value,
			};
			//调用后端查询待办任务接口
			var url = '/baseref/getRefData?terminalType=3';
			var proxy = cb.rest.DynamicProxy.create({
				settle: {
					url: url,
					method: "POST"
				}
			});
			proxy.settle(params, function (err, result) {
				if (err) {
					cb.utils.alert(err.message, 'error');
					return;
				}
				callback(result);
			});
		}

		 /**
         * 根据接口返回的数据，填充员工个人信息
         * @param data
         * @param viewModel
         */
        const setStaffInfo = (data, viewModel) => {
            let params = {
                data: data.value && data.value.code
            };
            let url = '/masterData/queryStaffWork';

            let proxy = viewModel.setProxy({
                settle: {
                    url: url,
                    method: "POST"
                }
            });
            proxy.settle(params, function (err, result) {
                if (err) {
                    cb.utils.alert(err.message, 'error');
                    return;
                }

                viewModel.get("staff_id_code") && viewModel.get("staff_id_code").setValue(result.staffCode);
                // 员工姓名
                viewModel.get('staff_name') && viewModel.get('staff_name').setValue(result.staffName);
                // 员工电话
                viewModel.get('tel') && viewModel.get('tel').setValue(result.phone);
                // 员工公司邮箱
                viewModel.get('mail') && viewModel.get('mail').setValue(result.emailCom);
                viewModel.get('staff_email') && viewModel.get('staff_email').setValue(result.emailCom);
                // 员工身份证号
                viewModel.get('identification') && viewModel.get('identification').setValue(result.identity);
                viewModel.get('identity') && viewModel.get('identity').setValue(result.identity);


                viewModel.get("area") && viewModel.get("area").setValue(result.areaId);
                viewModel.get("area_name") && viewModel.get("area_name").setValue(result.areaName);
                viewModel.get("org_unit_id") && viewModel.get("org_unit_id").setValue(result.unitId);
                viewModel.get("org_unit_id_name") && viewModel.get("org_unit_id_name").setValue(result.unitName);

                // 员工性别
                viewModel.get('sex') && viewModel.get('sex').setValue(result.sex);
                // 员工出生日期
                viewModel.get('birthday') && viewModel.get('birthday').setValue(result.birthdate);
                // 员工年龄
                viewModel.get('age') && viewModel.get('age').setValue(result.age);
                // 员工部门名称
                viewModel.get('dept_id_name') && viewModel.get('dept_id_name').setValue(result.deptName);
                // 员工部门id
                viewModel.get('dept_id') && viewModel.get('dept_id').setValue(result.deptId);
                //部门组织类型
                viewModel.get("org_id") && viewModel.get("org_id").setValue(result.unitId);
                viewModel.get("org_id_name") && viewModel.get("org_id_name").setValue(result.unitName);
                viewModel.get('org_type') && viewModel.get('org_type').setValue(result.unitType);
                // 员工职位名称
                viewModel.get('position_id_name') && viewModel.get('position_id_name').setValue(result.postName);
                // 员工职位id
                viewModel.get('position_id') && viewModel.get('position_id').setValue(result.postId);
                // 员工职级名称
                viewModel.get('rank_id_name') && viewModel.get('rank_id_name').setValue(result.rankName);
                // 员工职级id
                viewModel.get('rank_id') && viewModel.get('rank_id').setValue(result.rankId);
                // 员工档案退休日期
                viewModel.get('file_retire_date') && viewModel.get('file_retire_date').setValue(result.retireDate);//档案退休日期

                // 婚姻状况
                viewModel.get("marital_name") && viewModel.get("marital_name").setValue(result.marital_name);
                viewModel.get("marital_status") && viewModel.get("marital_status").setValue(result.marital_status);

                // 家庭住址
                viewModel.get("residential") && viewModel.get("residential").setValue(result.residential);


                viewModel.get("unit_id") && viewModel.get("unit_id").setValue(result.unitId);
                viewModel.get("unit_id_name") && viewModel.get("unit_id_name").setValue(result.unitName);

                viewModel.get("area_id") && viewModel.get("area_id").setValue(result.areaId);
                viewModel.get("area_id_name") && viewModel.get("area_id_name").setValue(result.areaName);

                // 加入雪花时间
                viewModel.get('join_date') && viewModel.get('join_date').setValue(result.joinCrcDate);
                viewModel.get('file_refirm_date') && viewModel.get('file_refirm_date').setValue(result.retireDate);//档案退休日期
                // 经理人一级标识描述
                viewModel.get('mrlvl1_desc') && viewModel.get('mrlvl1_desc').setValue(result.mrlvl1Desc);
                //入职日期
                viewModel.get('entry_date') && viewModel.get('entry_date').setValue(result.entryDate);
                // 工作地
                viewModel.get('bef_tran_workplace') && viewModel.get('bef_tran_workplace').setValue(result.workPlace);

            });
		}
		 /**
         * 设置卡片页面TaskName
         * @param {*} viewModel
         */
        let setTaskInfo = function (viewModel) {
            let bill_status = viewModel.get('verifystate').getValue();
            if (bill_status !== '' && bill_status !== 0) {
                let categoryId = viewModel.getParams().domainKey + '.' + viewModel.getParams().billNo;
                categoryId = categoryId.replace(/List/, '');
                let processInstanceId = viewModel.get("pk_procdefins") && viewModel.get("pk_procdefins").getValue();
                let params = {
                    categoryId: categoryId,
                    processInstanceId: processInstanceId,
                };
                //调用后端查询待办任务接口
                let url = '/taskContrast/taskInfo';
                // let url = '/basetask/taskName';
                let proxy = viewModel.setProxy({
                    settle: {
                        url: url,
                        method: "POST"
                    }
                });
                proxy.settle(params, function (err, result) {
                    if (err) {
                        cb.utils.alert(err.message, 'error');
                        return;
                    }
                    viewModel.get("task_name").setValue(result.taskName);
                    viewModel.get("task_desc").setValue(result.taskDesc);
                });
            }
        }
		let cardPage = function (viewModel) {
			console.log('=============================================================');
            // setTaskInfo(viewModel);
            // let mode = viewModel.getParams().mode;
            // if (mode && mode.toLocaleLowerCase() === 'add') {
            //     setServiceIns(viewModel);
            //     //setUserInfo(viewModel);
            // }
            // addRefFilter(viewModel);
		}
        /**
         * 设置服务目录
         * @param viewModel
         */
        const setServiceIns = function (viewModel) {
            let params = {
                data: viewModel.getParams().billNo.replace(/List/, ''),
            };
            let url = '/masterData/queryServiceCatalog';
            let proxy = viewModel.setProxy({
                settle: {
                    url: url,
                    method: "POST"
                }
            });
            proxy.settle(params, function (err, result) {
                if (err) {
                    cb.utils.alert(err.message, 'error');
                    return;
                }
                viewModel.get("service_ins_id") && viewModel.get("service_ins_id").setValue(result.id);
                viewModel.get("service_ins_id_name") && viewModel.get("service_ins_id_name").setValue(result.name);
                viewModel.get("snbc_service_ins") && viewModel.get("snbc_service_ins").setValue(result.id);
                viewModel.get("snbc_service_ins_name") && viewModel.get("snbc_service_ins_name").setValue(result.name);
            });
		}
		/**
         * 根据接口返回的数据，填充员工组织信息
         * @param data
         * @param viewModel
         */
        const setStaffUnit = (data, viewModel) => {
            let params = {
                data: data.value && data.value.org_id
            };
            let url = '/masterData/queryOrg';
            let proxy = viewModel.setProxy({
                settle: {
                    url: url,
                    method: "POST"
                }
            });
            proxy.settle(params, function (err, result) {
                if (err) {
                    cb.utils.alert(err.message, 'error');
                    return;
                }

                // 员工单位id
                viewModel.get("unit_id") && viewModel.get("unit_id").setValue(result.unitId);
                // 员工单位
                viewModel.get("unit_id_name") && viewModel.get("unit_id_name").setValue(result.unitName);

                // 员工业务单位
                viewModel.get("org_id_name") && viewModel.get("org_id_name").setValue(result.unitName);
                // 业务单位id
                viewModel.get("org_id") && viewModel.get("org_id").setValue(result.unitId);

                // 员工区域id
                viewModel.get("area_id") && viewModel.get("area_id").setValue(result.areaId);
                // 员工区域
                viewModel.get("area_id_name") && viewModel.get("area_id_name").setValue(result.areaName);

                viewModel.get("region") && viewModel.get("region").setValue(result.areaName);


            });
		}
		/**
         * 根据接口返回的数据，填充员工组织信息
         * @param data
         * @param viewModel
         */
        const setStaffContract = (data, viewModel) => {
            let params = {
                data: data.obj && data.obj.value
            };
            let url = '/masterData/queryLastContract';
            let proxy = viewModel.setProxy({
                settle: {
                    url: url,
                    method: "POST"
                }
            });
            proxy.settle(params, function (err, result) {
                if (err) {
                    cb.utils.alert(err.message, 'error');
                    return;
                }
                viewModel.get("labor_con_company") && viewModel.get("labor_con_company").setValue(result.conBodyId);
                viewModel.get("labor_con_company_name") && viewModel.get("labor_con_company_name").setValue(result.conBodyName);
                viewModel.get("con_subject") && viewModel.get("con_subject").setValue(result.conBodyId);
                viewModel.get("con_subject_name") && viewModel.get("con_subject_name").setValue(result.conBodyName);
                viewModel.get("bef_labor_con_company") && viewModel.get("con_subject").setValue(result.conBodyId);
                viewModel.get("bef_labor_con_company_name") && viewModel.get("con_subject_name").setValue(result.conBodyName);
            });
        }

		const setElementVisible = (fields, show, viewModel) => {
			
			for(let i=0; i < fields.length; i++){
				viewModel.get(fields[i]).setVisible(show[i]);
			}
			
		}

		return {
			isNull: isNull,
			dateAddYear: dateAddYear,
			dateAddMonth: dateAddMonth,
			dateAddDay: dateAddDay,
			diffDateAll: diffDateAll,
			diffDateYear: diffDateYear,
			toDoTask: toDoTask,
			completedTask: completedTask,
			getRefData: getRefData,
			setTaskInfo,
			setElementVisible,
			setStaffInfo: setStaffInfo,
			cardPage: cardPage,
			setStaffUnit,
			setStaffContract
		}
	}());

	try {
		module.exports = common_function_VM_Extend;
	} catch (error) { }
	return common_function_VM_Extend;
});
