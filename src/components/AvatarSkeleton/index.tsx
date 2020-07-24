import React from 'react';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const AvatarSkeleton: React.FC = () => (
    <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item position="relative" top="50%" height={200} width={200} borderRadius={100} />
    </SkeletonPlaceholder>
)

export default AvatarSkeleton;