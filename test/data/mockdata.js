module.exports = function() {
	return {
        date: {
            error: 0,
            msg: '',
            data: {
                time: [
                    {
                        text: '今日',
                        value: '1'
                    },
                    {
                        text: '最近7日',
                        value: '7'
                    },
                    {
                        text: '最近30日',
                        value: '30'
                    }
                ]
            }
        },
        list: {
            error: 0,
            msg: '',
            data: {
                section: [
                    {
                        title: '店员',
                        eleId: true,
                        list: [
                            {
                                clerkId: '123', //店员ID
                                name: '王二', //店员姓名
                                order_num: 23, //订单数
                                money_num: 232.22, 	//实收金额
                                isBound: true //是否绑定桌牌
                            },
                            {
                                clerkId: '124', //店员Id
                                name: '风清扬',
                                order_num: 713,
                                money_num: 712.02,
                                isBound: false
                            } 
                        ]
                    },
                    {
                        title: '其他',
                        eleId: false,
                        list: [
                            {
                                clerkId: '456', //店员Id
                                name: '店长订单',
                                order_num: 20,
                                money_num: 152.22,
                                isBound: false //是否绑定桌牌
                            }
                        ]
                    }		    	
                ]
            }
        },
        list_date1: {
            error: 0,
            msg: '',
            data: {
                section: [
                    {
                        title: '店员',
                        eleId: true,
                        list: [
                            {
                                clerkId: '123', //店员ID
                                name: '王二', //店员姓名
                                order_num: 23, //订单数
                                money_num: 232.22, 	//实收金额
                                isBound: true //是否绑定桌牌
                            },
                            {
                                clerkId: '124', //店员Id
                                name: '风清扬',
                                order_num: 713,
                                money_num: 712.02,
                                isBound: false
                            } 
                        ]
                    },
                    {
                        title: '其他',
                        eleId: false,
                        list: [
                            {
                                clerkId: '456', //店员Id
                                name: '店长订单',
                                order_num: 20,
                                money_num: 152.22,
                                isBound: false //是否绑定桌牌
                            }
                        ]
                    }		    	
                ]
            }
        },
        list_date7: {
            error: 0,
            msg: '',
            data: {
                section: [
                    {
                        title: '店员',
                        eleId: true,
                        list: [
                            {
                                clerkId: '123', //店员ID
                                name: '王二', //店员姓名
                                order_num: 723, //订单数
                                money_num: 7232.22, 	//实收金额
                                isBound: true //是否绑定桌牌
                            },
                            {
                                clerkId: '124', //店员Id
                                name: '风清扬',
                                order_num: 713,
                                money_num: 712.02,
                                isBound: false
                            } 
                        ]
                    },
                    {
                        title: '其他',
                        eleId: false,
                        list: [
                            {
                                clerkId: '456', //店员Id
                                name: '店长订单',
                                order_num: 20,
                                money_num: 152.22,
                                isBound: false //是否绑定桌牌
                            }
                        ]
                            }		    	
                    ]
                }
        },
        list_date30: {
            error: 0,
            msg: '',
            data: {
                section: [
                    {
                        title: '店员',
                        eleId: true,
                        list: [
                            {
                                clerkId: '123', //店员ID
                                name: '王二', //店员姓名
                                order_num: 3023, //订单数
                                money_num: 30232.22, 	//实收金额
                                isBound: true //是否绑定桌牌
                            },
                            {
                                clerkId: '124', //店员Id
                                name: '风清扬',
                                order_num: 713,
                                money_num: 712.02,
                                isBound: false
                            } 
                        ]
                    },
                    {
                        title: '其他',
                        eleId: false,
                                list: [
                                    {
                                        clerkId: '456', //店员Id
                                        name: '店长订单',
                                        order_num: 20,
                                        money_num: 152.22,
                                        isBound: false //是否绑定桌牌
                                    }
                                ]
                            }		    	
                    ]
                    }
        },
        detail_123: {
            error: 0,
            msg: '',
            data: {
                clerkId: '123',
                name: '王二',
                order_num: '12',
                money_num: '123',
                isBound: true //是否绑定桌牌
            }
        },
        detail_124: {
            error: 0,
            msg: '',
            data: {
                clerkId: '124', //店员Id
                name: '风清扬',
                order_num: 713,
                money_num: 712.02,
                isBound: false //是否绑定桌牌
            }
        },
        detailList: {
            status: true,
            error: 0,
            msg: '',
            data:  {
                status: true, 
                list:  [
                    {
                        date: '2016年03月12日',
                        totalPaidIn: '232', //金额总数
                        details: [
                            {
                                orderAmount: '25', 
                                coupon: '0.4',
                                paidIn: '123',
                                time: '14:42:23'
                            },
                            {
                                orderAmount: '125', 
                                coupon: '10.4',
                                paidIn: '223',
                                time: '12:42:23'
                        },
						]
					},
					{
						date: '2016年03月11日',
						totalPaidIn: '132', //金额总数
						details: [
							{
								orderAmount: '25', 
								coupon: '0.4',
								paidIn: '123',
								time: '14:42:23'
							},
							{
								orderAmount: '25', 
								coupon: '0.4',
								paidIn: '123',
								time: '14:42:23'
							},
						]
					},
					{
						date: '2016年03月10日',
						totalPaidIn: '132', //金额总数
						details: [
							{
								orderAmount: '205', 
								coupon: '20.4',
								paidIn: '223',
								time: '10:42:23'
							},
						]
					}
                ]
            }
        },

        detailList_123: {
            status: true,
            error: 0,
            msg: '',
            data:  {
                status: false, 
                list: [
                    {
                        date: '2016年03月10日',
                        totalPaidIn: '132', //金额总数
                        details: [
                            {
                                orderAmount: '205', 
                                coupon: '20.4',
                                paidIn: '223',
                                time: '10:42:23'
                            },
                            {
                                orderAmount: '25', 
                                coupon: '0.4',
                                paidIn: '123',
                                time: '14:42:23'
                            },
                            {
                                orderAmount: '125', 
                                coupon: '10.4',
                                paidIn: '223',
                                time: '12:42:23'
                            },
                        ]
                    },
                    {
                        date: '2016年03月09日',
                        totalPaidIn: '132', //金额总数
                        details: [
                            {
                                orderAmount: '205', 
                                coupon: '20.4',
                                paidIn: '223',
                                time: '10:42:23'
                            },
                            {
                                orderAmount: '25', 
                                coupon: '0.4',
                                paidIn: '123',
                                time: '14:42:23'
                            },
                            {
                                orderAmount: '125', 
                                coupon: '10.4',
                                paidIn: '223',
                                time: '12:42:23'
                            },
                        ]
                    },
                ]
            }

        },
        detailList_124: {
            status: true,
            error: 0,
            msg: '',
            data:  {
                status: false, 
                list: [
                    {
                        date: '2016年03月10日',
                        totalPaidIn: '132', //金额总数
                        details: [
                            {
                                orderAmount: '205', 
                                coupon: '20.4',
                                paidIn: '223',
                                time: '10:42:23'
                            },
                            {
                                orderAmount: '25', 
                                coupon: '0.4',
                                paidIn: '123',
                                time: '14:42:23'
                            },
                            {
                                orderAmount: '125', 
                                coupon: '10.4',
                                paidIn: '223',
                                time: '12:42:23'
                            },
                        ]
                    },
                    {
                        date: '2016年03月09日',
                        totalPaidIn: '132', //金额总数
                        details: [
                            {
                                orderAmount: '205', 
                                coupon: '20.4',
                                paidIn: '223',
                                time: '10:42:23'
                            },
                            {
                                orderAmount: '25', 
                                coupon: '0.4',
                                paidIn: '123',
                                time: '14:42:23'
                            },
                            {
                                orderAmount: '125', 
                                coupon: '10.4',
                                paidIn: '223',
                                time: '12:42:23'
                            },
                        ]
                    },
                ]
            }
        },
        bindCard: {
            error: 0,
            msg: '',
        },
        clerkDel: {
            error: 0,
            msg: '',
        }
    }
}
