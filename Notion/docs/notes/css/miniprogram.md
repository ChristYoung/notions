### 微信小程序中的样式问题
- 微信小程序中要想使得text-overflow:ellipsis生效, 必须在view中嵌套
  
  ```html
  <view class="address">
    <!-- 然后设置内部的address_content的text-overflow -->
    <text class="address_content">{{ item.addressDetail }}</text>
  </view>
  ```
  