export interface Clothes {
  id: number; //唯一标识符，衣服创建时间的UNIX时间戳
  name: string; //用户对衣服的命名
  state: string; //衣服状态 On,Off,Wet,Wash四种状态

  onCycle: number; //上一次store开始累计状态为On的最长时间，单位ms
  onTime: number; //上一次store开始累计状态为On的时间，单位ms
  firstPutOnTimeStamp: number; //上一次store开始第一次穿上的UNIX时间戳

  wetCycle: number; //上一次wash到store的时间，单位ms
  lastTimeStamp: number; //每次puton和wash操作都会更新该时间戳
}
